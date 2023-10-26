import React,{ useState } from "react";
//import "./updatebutton.css";
import { useStateContext } from '../contexts/ContextProvider';


export default function Updatebutton(props) {
  
  //using event we can fetch thee value by using event.target.value its a object
  // const [open, setOpen] = useState(false);
  // const [rank, setRank] = useState(12890);
  // const [percentile, setPercentile] = useState(37);
  // const [score, setScore] = useState(7);
  const {open,setOpen,rank,setRank,setPercentile,setScore,percentile,score} = useStateContext()
  
  const Rankhandler = (event) => {
    setRank(event.target.value); //storing value in the form of state using usestate
    //console.log(title);
  };
  const Scorehandler = (event) => {
    setScore(event.target.value); //storing value in the form of state using usestate
  };
  const percentilehandler = (event) => {
    setPercentile(event.target.value); //storing value in the form of state using usestate
  };

  const AddDatahandler = () => {
    setOpen(true);
  };

  //fetching all the datA OF THE INPUTS AND STORE USING JAVASRIPT
  const formdatahandler = (event) => {
    if(!open)
    {
      setOpen(true);
    }
    else{
      setOpen(false);
    }
   
    event.preventDefault();

    const data = {
      score: +score,
      rank: +rank,
      percentile: percentile,
    };
    //props.saveonexpense(data);
    setScore(score);
    setRank(rank);
    setPercentile(percentile);
  };
 
 
 
    return (
    <div className="form-box1">
    <form onSubmit={formdatahandler}>
      <div className="new-expense__controls1">
        <div className="new-expense__control1">
          <h3>Update Scores</h3>
          <label>Rank</label>
          <input type="number" value={rank} onChange={Rankhandler}></input>
        </div>
        <div className="new-expense__contro1l">
          <label>Percentile</label>
          <input type="number" value={percentile} onChange={percentilehandler}></input>
        </div>
        <div className="new-expense__control1">
          <label>Score</label>
          <input type="number" value={score} onChange={Scorehandler}></input>
        </div>
      </div>
      <div className="new-expense__actions1">
        <button type="submit" onClick={formdatahandler}>
          Save
        </button>
      </div>
    </form>
    </div>
  );
}
