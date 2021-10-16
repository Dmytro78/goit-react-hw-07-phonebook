import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/filter/filter-actions.js";
import css from "../Filter/Filter.module.css";


export default function Filter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
   <label className={css.label}>
      <input
        type="text"
        name="name"
        value={value}
        onChange={(e) => dispatch(filter(e.currentTarget.value))}
      ></input>
    </label>
  );
}