import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormAction } from "../storeToolkit/BTForm/slice";

const FormProduct = () => {
  const [formData, setFormData] = useState();
  const [formError, setFormError] = useState();
  const dispatch = useDispatch();

  const { productEdit } = useSelector((state) => state.btForm);

  const handleFormData = (name) => (ev) => {
    const { name, value, minLength, max, title, validity } = ev.target;

    let mess;
    if (minLength != -1 && !value.length) {
      mess = `Vui lòng nhập thông tin ${title}`;
    } else if (value.length < minLength) {
      mess = `Vui lòng nhập tối thiểu ${minLength} ký tự`;
    } else if (value.length > max && max) {
      mess = `Chỉ lòng nhập tối đa ${max} ký tự`;
    } else if (validity.patternMismatch && ["ma", "sdt"].includes(name)) {
      mess = `Vui lòng nhập ký tự là số`;
    } else if (validity.patternMismatch && ["hoTen"].includes(name)) {
      mess = `Vui lòng nhập ký tự là chữ`;
    } else if (validity.patternMismatch && ["email"].includes(name)) {
      mess = `Vui lòng nhập đúng định dạng email`;
    }

    setFormError({
      ...formError,
      [name]: mess,
    });

    setFormData({
      ...formData,
      [name]: mess ? undefined : value,
    });
  };

  useEffect(() => {
    if (!productEdit) return;

    setFormData(productEdit);
  }, [productEdit]);

  return (
    <form
      id="form-create"
      onSubmit={(event) => {
        event.preventDefault();
        const elemets = document.querySelectorAll("input");

        let formError = {};
        elemets.forEach((ele) => {
          let mess;
          const { name, value, minLength, title, max, validity } = ele;
          if (minLength != -1 && !value.length) {
            mess = `vui lòng nhập thông tin ${title}`;
          } else if (value.length < minLength) {
            mess = `vui lòng nhập tối thiểu ${minLength} ký tự`;
          } else if (value.length > max && max) {
            mess = `chỉ được nhập tối đa ${max} ký tự`;
          } else if (validity.patternMismatch && ["ma", "sdt"].includes(name)) {
            mess = `vui lòng nhập ký tự là số`;
          } else if (validity.patternMismatch && ["hoTen"].includes(name)) {
            mess = `Vui lòng nhập ký tự là chữ`;
          } else if (validity.patternMismatch && ["email"].includes(name)) {
            mess = `Vui lòng nhập đúng định dạng email`;
          }

          formError[name] = mess;
        });

        let flag = false;

        for (let key in formError) {
          if (formError[key]) {
            flag = true;
            break;
          }
        }

        if (flag) {
          setFormError(formError);
          return;
        }

        if (productEdit) {
          dispatch(btFormAction.updateProduct(formData));
        } else {
          dispatch(btFormAction.addProduct(formData));
        }
      }}
      noValidate
    >
      <h2 className="px-2 py-4 bg-dark text-white mt-3">Thông tin sinh viên</h2>
      <div className="form-group row">
        <div className="col-6">
          <p>Mã SV</p>
          <input
            disabled={!!productEdit}
            type="text"
            value={formData?.ma}
            name="ma"
            title="ma"
            className="form-control"
            placeholder="Nhập mã sinh viên"
            onChange={handleFormData()}
            minLength={6}
            max={20}
            pattern="^[0-9]+$"
          />
          <p className="text-danger">{formError?.ma}</p>
        </div>
        <div className="col-6">
          <p>Họ tên</p>
          <input
            type="text"
            name="hoTen"
            title="hoTen"
            value={formData?.hoTen}
            className="form-control"
            placeholder="Nhập họ tên"
            onChange={handleFormData()}
            minLength={1}
            pattern="^[A-Z + _ + a-z]+$"
          />
          <p className="text-danger">{formError?.hoTen}</p>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-6">
          <p>Số điện thoại</p>
          <input
            type="text"
            name="sdt"
            title="sdt"
            value={formData?.sdt}
            className="form-control"
            placeholder="Nhập số điện thoại"
            onChange={handleFormData()}
            minLength={1}
            pattern="^[0-9]+$"
          />
          <p className="text-danger">{formError?.sdt}</p>
        </div>
        <div className="col-6">
          <p>Email</p>
          <input
            type="text"
            name="email"
            title="email"
            value={formData?.email}
            className="form-control"
            placeholder="Nhập email"
            onChange={handleFormData()}
            minLength={1}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          />
          <p className="text-danger">{formError?.email}</p>
        </div>
      </div>
      <div className="mt-3">
        {productEdit && <button className="btn btn-info ml-3">Update</button>}
        {!productEdit && <button className="btn btn-success">Create</button>}
      </div>
    </form>
  );
};

export default FormProduct;
