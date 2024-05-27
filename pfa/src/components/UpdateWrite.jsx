import React, { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getDatabase, ref, get, set, update } from "firebase/database"
import { getAuth } from "firebase/auth";
import { useNavigate, useParams } from "react-router-dom";

const UpdateWrite = () => {

  const navigate = useNavigate();
  const { firebaseId } = useParams();

  let [inputCA, setInputCA] = useState("")
    let [inputNbOffers, setInputNbOffers] = useState("")
    let [inputNbEmployees, setInputNbEmployees] = useState("")
    let [inputLocation, setInputLocation] = useState("")
    let [inputMarketBudget, setInputMarketBudget] = useState("")
    let [inputToolsBudget, setInputToolsBudget] = useState("")
  let [inputAdress, setInputAdress] = useState("")
  let [inputName, setInputName] = useState("")
  let [inputBusinessName, setInputBusinessName] = useState("")
  let [inputTel, setInputTel] = useState("")
  let [inputMail, setInputMail] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.log("Aucun utilisateur connecté.")
      }

      const uid = user.uid
      const db = getDatabase(app);
      const dataRef = ref(db, `comptables/${uid}/clients/${firebaseId}`);
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const targetObject = snapshot.val();
        setInputCA(targetObject.CA || "");
        setInputNbOffers(targetObject.NbOffers || "");
        setInputNbEmployees(targetObject.NbEmployees || "");
        setInputLocation(targetObject.Location || "");
        setInputMarketBudget(targetObject.MarketBudget || "");
        setInputToolsBudget(targetObject.ToolsBudget || "");
        setInputAdress(targetObject.Adress || "");
        setInputName(targetObject.Name || "");
        setInputBusinessName(targetObject.BusinessName || "");
        setInputTel(targetObject.Tel || "");
        setInputMail(targetObject.Mail || "");
      } else {
        alert("Les données n'existent pas ");
      }
    }
    fetchData();
  }, [firebaseId])


  const overwriteData = async () => {
    
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.log("Aucun utilisateur connecté.")
    }

    const uid = user.uid
    
    const db = getDatabase(app);
    
    const newDocRef = ref(db, `comptables/${uid}/clients/${firebaseId}`);
    /*
    set(newDocRef, {
      Adress: inputAdress,
      Name: inputName,
      BusinessName: inputBusinessName,
      Tel: inputTel,
      Mail: inputMail,
    }).then(() => {
      alert("data updated successfully")
    }).catch((error) => {
      alert("error: ", error.message);
    })
    */

    try {
      await update(newDocRef, {
          CA: inputCA,
          NbOffers: inputNbOffers,
          NbEmployees: inputNbEmployees,
          Location: inputLocation,
          MarketBudget: inputMarketBudget,
          ToolsBudget: inputToolsBudget,
          Adress: inputAdress,
          Name: inputName,
          BusinessName: inputBusinessName,
          Tel: inputTel,
          Mail: inputMail,
      });
      alert("data rewrite")
  } catch(error) {
      alert("error: ", error.message);
      console.log(error.message)
  }
  }


  return (
    <div>

      <h1>UPDATE</h1>
      <input type='text' value={inputAdress} onChange={(e) => setInputAdress(e.target.value)} />
      <input type='text' value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <input type='text' value={inputBusinessName} onChange={(e) => setInputBusinessName(e.target.value)} />
      <input type='tel' value={inputTel} onChange={(e) => setInputTel(e.target.value)} />
      <input type='email' value={inputMail} onChange={(e) => setInputMail(e.target.value)} />
      <button onClick={overwriteData}>UPDATE</button>
      <br />
      <br />
      <br />
      <button className='button1' onClick={() => navigate("/updateread")}>GO UPDATE READ</button> <br />
      <button className='button1' onClick={() => navigate("/read")}>GO READ PAGE</button>
    </div>
  )
}

export default UpdateWrite;