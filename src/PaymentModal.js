import React from 'react';
import Modal from 'react-modal';
import './PaymentModal.css';

Modal.setAppElement('#root');

const PaymentModal = ({ isOpen, onRequestClose, onPayment }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Payment Modal"
      className="payment-modal"
      overlayClassName="payment-modal-overlay"
    >
      <h2>Payment Details</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onPayment();
        }}
      >

        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </Modal>
  );
};

export default PaymentModal;
