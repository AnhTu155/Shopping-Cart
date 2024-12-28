import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Form, Modal } from "antd";
import CartItem from "./CartItem";

const Header = () => {
  const [form] = Form.useForm();

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <Link to="/" className="text-lg font-bold text-gray-800">
            <strong>MDB DEV DEMO</strong>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <div className="flex gap-5">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              {" "}
              Home
            </Link>

            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              {" "}
              Products
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              {" "}
              contact
            </Link>
          </div>
        </div>

        <div className="relative">
          <ul className="nav-bar-nav">
            <li className="nav-item dropdown">
              <Button
                className="relative text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-expanded="false"
                onClick={handleShow}
              >
                <ShoppingCartOutlined className="h-[20px] w-[20px]" />
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs px-2">
                  30
                </span>
              </Button>
              <ul
                className="dropdown-menu dropdown-menu-end cart-dropdown"
                aria-labelledby="navbarDropdownCart"
              >
                <a>
                  <h3 className="dropdown-item">Your Cart</h3>
                </a>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {/* <Modal show={showModal} onHide={handleClose}> */}
                {/* <Form> */}
                {/* <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <CartItem />
                    </tbody>
                  </table>
                </div> */}
                {/* </Form> */}
                {/* </Modal> */}
                <Modal
                  title="EditForm"
                  visible={showModal}
                  onCancel={() => setShowModal(false)}
                >
                  <Form form={form} layout="vertical">
                    <Form.Item name="id" label="id">
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <CartItem />
                          </tbody>
                        </table>
                      </div>
                    </Form.Item>
                  </Form>
                </Modal>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
