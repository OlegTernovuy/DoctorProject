// import React, {Component} from 'react'
import { useState, useEffect } from "react";
import "./AddPrice.css";
import { PriceCard } from "./PriceCard";
import { AddPriceModal } from "./AddPriceModal";
import { EditPriceModal } from "./EditPriceModal";
import CircularProgress from "@mui/material/CircularProgress";

export const AddPrice = ({ isAdmin }) => {
  const [showAddPriceForm, setShowAddPriceForm] = useState(false);
  const [showEditPriceForm, setShowEditPriceForm] = useState(false);
  const [PriceArr, setPriceArr] = useState([]);
  const [selectPrice, setSelectPrice] = useState({});
  const [isPending, setIsPending] = useState(false);

  const getData = async () => {
	try{
		setIsPending(true);
		const responce = await fetch('https://doctor-study-project.herokuapp.com/prices')

		if(responce.status === 200){
			const data = await responce.json()
			setIsPending(false);
			setPriceArr(data);
		}

	}catch(err){
		setIsPending(false)
		console.log(err);
	}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShowAddPriceForm = () => {
    setShowAddPriceForm(true);
  };
  const handleHideAddPriceForm = () => {
    setShowAddPriceForm(false);
  };

  const handleShowEditPriceForm = () => {
    setShowEditPriceForm(true);
  };

  const handleHideEditPriceForm = () => {
    setShowEditPriceForm(false);
  };

  const handlSelectPrice = (Price) => {
    setSelectPrice(Price);
  };

  const deletePrice = async (MyPrice) => {
	if (
      window.confirm(
        `Ви впевнені, що хочете видалити послугу: ${MyPrice.title}?`
      )
    ) {
		try{
			setIsPending(true)
			const responce = await fetch('https://doctor-study-project.herokuapp.com/prices/' + MyPrice._id,{
				method:'DELETE'
			})
			if(responce.status === 200){
				getData()
			}else{
				setIsPending(false)
			}

		}catch(err){
			setIsPending(false)
			console.log(err);
		}
    }
  };

  const addNewPrice = async (MyPrice) => {
	try{
   	setIsPending(true);
		const responce = await fetch('https://doctor-study-project.herokuapp.com/prices',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify(MyPrice)
		})
		if(responce.status === 200){
			getData()
		}else{
			setIsPending(false)
		}

	}catch(err){
		setIsPending(false)
		console.log(err)
	}
  };

  const EditPrice = async (updatePrice) => {
	try{
		setIsPending(true)
		const responce = await fetch('https://doctor-study-project.herokuapp.com/prices/' + updatePrice.id,{
			method:'PUT',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({title:updatePrice.title,price:updatePrice.price})
		})

		if(responce.status === 200){
        getData();
		}else{
			setIsPending(false)
		}

	}catch(err){
		setIsPending(false)
		console.log(err)
	}
  };

  const pricePosts = PriceArr.map((item) => {
    return (
      <PriceCard
        key={item._id}
        id={item._id}
        title={item.title}
        price={item.price}
        deletePrice={() => deletePrice(item)}
        handleShowEditPriceForm={handleShowEditPriceForm}
        handlSelectPrice={() => handlSelectPrice(item)}
        isAdmin={isAdmin}
      />
    );
  });

  if (PriceArr.length === 0)
    return (
      <div className="waitDownl">
        <h1>Завантаження даних...</h1>
      </div>
    );

  const vacOpacity = isPending ? 0.5 : 1;

  return (
    <>
      <div className="containerVac">
        {showAddPriceForm && (
          <AddPriceModal
            PriceArr={PriceArr}
            handleHideAddPriceForm={handleHideAddPriceForm}
            addNewPrice={addNewPrice}
          />
        )}
        {showEditPriceForm && (
          <EditPriceModal
            handleHideEditPriceForm={handleHideEditPriceForm}
            selectPrice={selectPrice}
            EditPrice={EditPrice}
          />
        )}
        <div className="vaccination">Ціна на послуги</div>
        <div className="price" style={{ opacity: vacOpacity }}>
          <div className="vacList">
            <div
              className="vacName"
              style={{ fontWeight: "1000", color: "#000" }}
            >
              Назва послуги
            </div>
            <div
              className="PoslugaPrice"
              style={{ fontWeight: "1000", color: "#000" }}
            >
              Ціна, грн
            </div>
          </div>
          <div className="price">{pricePosts}</div>
          {isPending && <CircularProgress className="preLoader" />}
        </div>

        {isAdmin && (
          <div className="addVacButton">
            <button onClick={handleShowAddPriceForm}>
              Додати нову послугу
            </button>
          </div>
        )}
      </div>
    </>
  );
};
