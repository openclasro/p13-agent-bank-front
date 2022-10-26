export default function AccountItem({ title, amount, onViewTransactionClick }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={onViewTransactionClick}>
          View transactions
        </button>
      </div>
    </section>
  )
}
