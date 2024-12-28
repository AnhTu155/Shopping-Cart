import { RestOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

function CartItem() {
  return (
    <>
      <div>
        <tr className="flex flex-wrap gap-[10px]">
          <td>
            <img
              src="images/product1.jpg"
              className="w-[50px] h-[50px]"
              alt="iPhone 15 Pro Max 2023"
            />
          </td>
          <td>
            <span className="item-name">iPhone 15 Pro Max 2023</span>
          </td>
          <td>
            <span className="item-quantity mr-[5px]">Qty: 2</span>
            <Button className=" mr-[5px] border-none bg-blue-400">-</Button>
            <Button className="border-none bg-blue-400">+</Button>
          </td>
          <td>
            <span className="item-price">$39.98</span>
          </td>
          <td>
            <Button className="bg-red-500">
              <RestOutlined />
            </Button>
          </td>
        </tr>
        <div>
          <span className="float-start ms-2 mt-[10px]">
            <strong>Total:</strong>
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
