import AccountItem from "./AccountItem"

export default function AccountList() {
  return (
    <div className="account-list">
      <h2 className="sr-only">Accounts</h2>
      <AccountItem
        title="Argent Bank Checking (x8349)"
        amount="2,082.79"
        onViewTransactionClick={() => {}}
      />
      <AccountItem
        title="Argent Bank Savings (x6712)"
        amount="10,928.42"
        onViewTransactionClick={() => {}}
      />
      <AccountItem
        title="Argent Bank Credit Card (x8349)"
        amount="184.30"
        onViewTransactionClick={() => {}}
      />
    </div>
  )
}
