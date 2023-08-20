import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormAction } from "../storeToolkit/BTForm/slice";

const TableProduct = () => {
  const { productList } = useSelector((state) => state.btForm);
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((prd) => (
            <tr key={prd?.ma}>
              <td>{prd?.ma}</td>
              <td>{prd?.hoTen}</td>
              <td>{prd?.sdt}</td>
              <td>{prd?.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(btFormAction.deleteProduct(prd.ma));
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info ml-3"
                  onClick={() => {
                    dispatch(btFormAction.editProduct(prd));
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
