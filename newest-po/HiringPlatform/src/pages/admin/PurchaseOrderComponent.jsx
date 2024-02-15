import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate } from "react-router-dom";

function PurchaseOrderComponent() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  const fetchPurchaseOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3001/purchase-orders-details");
      console.log(response.data);
      setPurchaseOrders(response.data);
      console.log(purchaseOrders)
    } catch (error) {
      console.error("Error fetching purchase orders:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div>
        <h2 className="text-lg font-bold mb-4">Purchase Orders</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border border-gray-300">Trainer Name</th>
              <th className="p-3 border border-gray-300">Trainer Email</th>
              <th className="p-3 border border-gray-300">Skills</th>
              <th className="p-3 border border-gray-300">Charge Per Day</th>
              <th className="p-3 border border-gray-300">Company Name</th>
              <th className="p-3 border border-gray-300">Location</th>
              <th className="p-3 border border-gray-300">Company Email</th>
              <th className="p-3 border border-gray-300">Company Phone</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrders.map((purchaseOrder) => (
              <tr key={purchaseOrder._id}>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.trainerName}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.trainerEmail}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.skills}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.chargePerDay}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.companyName}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.location}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.companyEmail}
                </td>
                <td className="p-3 border border-gray-300">
                  {purchaseOrder.companyPhone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PurchaseOrderComponent;