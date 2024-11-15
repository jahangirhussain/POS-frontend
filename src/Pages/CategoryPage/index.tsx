import { Form, Formik } from "formik";
import React, { FC, useState, useEffect } from "react";
import TextField from "../../Components/TextField";
import { schema } from "../../schema";
import Button from "../../Components/Button";
import style from "./style.module.css";
import useTheme from "../../context/Theme/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../Components/SelectFeild";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Reducers";
import {
  addCategory,
  removeCategory,
  set_categories,
  updateCategory,
} from "../../store/Actions";
import axios from "axios";
import useSnackbar from "../../context/Snackbar/useSnackbar";
/**
 * ## Product Category
 * Category page the page that allow the user to manipulate the different categories
 * in the system. The user can add or edit or even delete a category.
 * ```ts
 * type Category = {
 * categoryName:string,
 * }
 * ```
 */
const CategoryPage: FC = () => {
  const [status, setStatus] = useState<string>("add");
  const categories = useSelector<RootState>(
    (state) => state.categoriessReducer
  ) as Category[];
  const { onResponse } = useSnackbar();
  const dispatch = useDispatch();
  const theme = useTheme();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/category/categories")
      .then((res) => dispatch(set_categories(res.data)))
      .catch((err) => {
        alert(err?.response?.message);
      });
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div
        className={style.cate}
        style={{
          backgroundColor: theme.palette.paper,
          boxShadow: "0 2px 8px" + theme.palette.shadow,
        }}
      >
        <div className={style.switcher}>
          <FontAwesomeIcon
            fontSize={24}
            color={theme.palette.textPrimary}
            cursor={"pointer"}
            icon={faAdd}
            onClick={() => setStatus("add")}
          />
          <FontAwesomeIcon
            fontSize={24}
            color={theme.palette.textPrimary}
            cursor={"pointer"}
            icon={faEdit}
            onClick={() => setStatus("update")}
          />
          <FontAwesomeIcon
            fontSize={24}
            color={theme.palette.textPrimary}
            cursor={"pointer"}
            icon={faTrashCan}
            onClick={() => setStatus("delete")}
          />
        </div>
        {status === "add" && (
          <Formik
            onSubmit={(values) => {
              axios
                .post(process.env.REACT_APP_API_URL + "/category/new/", {
                  categoryName: values.category,
                })
                .then((res) => {
                  onResponse({
                    message: res.data.message,
                    status: res.status,
                  });
                  dispatch(addCategory(values.category));
                })
                .catch((err) => {
                  onResponse({
                    message: err.response.data.message,
                    status: err.response.status,
                  });
                });
            }}
            initialValues={{ category: "" }}
            validationSchema={schema}
          >
            <Form>
              <TextField
                id="category"
                name="category"
                placeholder="Enter Catgeory Name"
                width="100%"
              />
              <Button type="submit" fullWidth variant="error">
                Add
              </Button>
            </Form>
          </Formik>
        )}
        {status === "update" && (
          <Formik
            onSubmit={(values, actions) => {
              axios
                .post(
                  process.env.REACT_APP_API_URL +
                    "/category/update/" +
                    values.selectedCategory,
                  { categoryName: values.category }
                )
                .then((res) => {
                  onResponse({
                    message: res.data.message,
                    status: res.status,
                  });
                  dispatch(
                    updateCategory(values.selectedCategory, values.category)
                  );
                })
                .catch((err) => {
                  onResponse({
                    message: err.response.data.message,
                    status: err.response.status,
                  });
                });
            }}
            initialValues={{
              category: "",
              selectedCategory: categories[0].categoryName,
            }}
            validationSchema={schema}
          >
            <Form>
              <SelectField
                name="selectedCategory"
                width="100%"
                options={categories?.map((p) => {
                  return { key: p.categoryName, value: p.categoryName };
                })}
              />
              <TextField
                id="category"
                name="category"
                width="100%"
                placeholder="Enter New Catgeory Name"
              />
              <Button type="submit" fullWidth variant="error">
                Update
              </Button>
            </Form>
          </Formik>
        )}
        {status === "delete" && (
          <Formik
            onSubmit={(values) => {
              axios
                .delete(
                  process.env.REACT_APP_API_URL +
                    "/category/delete/" +
                    values.selectedCategory
                )
                .then((res) => {
                  onResponse({
                    message: res.data.message,
                    status: res.status,
                  });
                  dispatch(removeCategory(values.selectedCategory));
                })
                .catch((err) => {
                  onResponse({
                    message: err.response.data.message,
                    status: err.response.status,
                  });
                });
            }}
            initialValues={{ selectedCategory: categories[0].categoryName }}
            validationSchema={schema}
          >
            <Form>
              <SelectField
                name="selectedCategory"
                width="100%"
                options={categories?.map((p) => {
                  return { key: p.categoryName, value: p.categoryName };
                })}
              />
              <Button type="submit" fullWidth variant="error">
                Delete
              </Button>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
