'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'James Smith',
  movements: [
    200, 450, -400, 3000, -650, -130, 70, 1300, 800, -1200, 600, -300, 450,
    -700, 1000, -250,
  ],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-01-01T15:30:05.345Z',
    '2020-04-25T09:45:12.567Z',
    '2020-07-10T18:20:22.901Z',
    '2020-09-15T12:05:07.432Z',
    '2021-02-28T07:55:33.876Z',
    '2023-01-12T06:30:00.000Z',
    '2023-03-22T14:45:00.000Z',
    '2023-04-14T09:20:00.000Z',
    '2023-06-30T07:10:00.000Z',
    '2023-07-05T12:55:00.000Z',
    '2023-09-18T11:25:00.000Z',
    '2023-04-20T17:40:00.000Z',
    '2023-08-09T08:15:00.000Z',
    '2023-11-01T17:15:45.123Z',
    '2023-11-03T17:15:45.123Z',
  ],
  locale: 'pt-PT',
  currency: 'EUR',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-01-01T15:30:05.345Z',
    '2020-04-25T09:45:12.567Z',
    '2020-07-10T18:20:22.901Z',
    '2020-09-15T12:05:07.432Z',
    '2021-02-28T07:55:33.876Z',
    '2023-01-12T06:30:00.000Z',
    '2023-03-22T14:45:00.000Z',
  ],
  locale: 'en-GB',
  currency: 'GBP',
};

const account3 = {
  owner: 'Tristan Yui',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-01-01T15:30:05.345Z',
    '2020-04-25T09:45:12.567Z',
    '2020-07-10T18:20:22.901Z',
    '2020-09-15T12:05:07.432Z',
    '2021-02-28T07:55:33.876Z',
    '2023-01-12T06:30:00.000Z',
    '2023-03-22T14:45:00.000Z',
  ],
  locale: 'ja-JP',
  currency: 'JPY',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-01-01T15:30:05.345Z',
    '2020-04-25T09:45:12.567Z',
    '2020-07-10T18:20:22.901Z',
    '2020-09-15T12:05:07.432Z',
    '2021-02-28T07:55:33.876Z',
    '2023-01-12T06:30:00.000Z',
    '2023-03-22T14:45:00.000Z',
  ],
  locale: 'pt-PT',
  currency: 'EUR',
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const homePageLogo = document.querySelector('.logo');
const homePageLogin = document.querySelector('.login');
const welcomeMessage = document.querySelector('.welcome');
const loginButton = document.querySelector('.login__btn');
const error = document.querySelector('.error');
const loginContainer = document.querySelector('.login_container');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const changeUser = document.querySelector('.change_user');
let loanMessage = document.querySelector('.loan_message');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Create a new user
const newUserConatiner = document.querySelector('.new_user_container');
const inputNewUserUsername = document.querySelector('.new_user');
const inputNewUserPin = document.querySelector('.new_pin');
const inputNewUserBtn = document.querySelector('.new_user_btn');
const create = document.querySelector('.create');
const createContainer = document.querySelector('.create_container');
const addUserMessage = document.querySelector('.new_user_message');

//Log Out
const logOut = document.querySelector('.log_out');

logOut.addEventListener('click', function () {
  addUserMessage.style.display = 'block';
  changeUser.style.opacity = 100;
  // error.style.opacity = 0;
  // error.style.fontSize = '0';
  // error.style.paddingBottom = '0';
  containerApp.style.display = 'none';
  homePageLogo.style.marginTop = '4rem'; // Setting it back to the original value
  homePageLogin.style.opacity = 100;
  homePageLogin.style.marginTop = '2rem'; // Setting it back to the original value
  homePageLogin.style.fontSize = '1.6rem'; // Setting it back to the original value
  welcomeMessage.style.marginTop = '5rem'; // Setting it back to the original value
  welcomeMessage.style.paddingBottom = '2rem'; // Setting it back to the original value
  loginButton.style.marginTop = '1.8rem'; // Setting it back to the original value
  loginButton.style.opacity = 100;
  homePageLogo.style.height = '10.25rem'; // Setting it back to the original value
  homePageLogin.style.paddingTop = '0';
  inputLoginUsername.style.fontSize = '1.6rem'; // Setting it back to the original value
  inputLoginPin.style.fontSize = '1.6rem'; // Setting it back to the original value
  create.style.display = 'initial';
  logOut.style.opacity = 0;
  loginContainer.style.display = 'block';
  newUserConatiner.style.display = 'block';
  createContainer.style.textAlign = 'center !important';
  changeUser.style.opacity = 0;

  inputLoginPin.style.border = 'initial';
  inputLoginUsername.style.border = 'initial';

  welcomeMessage.textContent = 'Enter your details to get started...';
});

inputNewUserBtn.addEventListener('click', function (e) {
  e.preventDefault();

  createAccount();
});

// Create a new account

const createAccount = function () {
  addUserMessage.style.opacity = 100;

  if (inputNewUserPin.value.length !== 4 || isNaN(inputNewUserPin.value)) {
    addUserMessage.textContent = 'Pin must be a four-digit number';
    inputNewUserPin.value = '';
    inputNewUserPin.style.borderColor = 'red';
  } else {
    addUserMessage.textContent = 'User Added';
    inputNewUserPin.style.borderColor = 'initial';
    inputNewUserUsername.style.borderColor = 'initial';
    // Generate a new account number based on the length of the accounts array
    const newAccountNumber = accounts.length + 1;

    // Create a new account object
    const newAccount = {
      owner: inputNewUserUsername.value,
      movementsDates: [new Date()],
      movements: [100],
      pin: +inputNewUserPin.value,
      locale: 'en-GB',
      currency: 'GBP',
    };

    // Add the new account to the accounts array
    accounts.push(newAccount);

    // Log the new account details
    console.log(`Account ${newAccountNumber}:`, newAccount);
    createUsernames(accounts);
    // Log the updated accounts array
    console.log(accounts);

    alert(
      `Thank you for registering, your default username is ${inputNewUserUsername.value
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('')}`
    );
    inputNewUserUsername.value = inputNewUserPin.value = '';
  }
};

create.addEventListener('click', function () {
  newUserConatiner.style.opacity = 100;
});

let isToggled = false;

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = date.getFullYear();
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${type}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(acc, isToggled);
  isToggled = !isToggled; // Toggles the state of isToggled
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
};

const loginUI = function () {
  addUserMessage.style.display = 'none';
  changeUser.style.opacity = 100;
  error.style.opacity = 0;
  error.style.fontSize = 0;
  error.style.paddingBottom = 0;
  containerApp.style.opacity = 100;
  containerApp.style.display = 'grid';
  // homePageLogo.style.opacity = 0;
  homePageLogo.style.marginTop = 0;
  homePageLogin.style.opacity = 0;
  homePageLogin.style.marginTop = 0;
  homePageLogin.style.fontSize = 0;
  welcomeMessage.style.marginTop = 3;
  welcomeMessage.style.paddingBottom = 0;
  loginButton.style.marginTop = 0;
  loginButton.style.opacity = 0;
  homePageLogo.style.height = 0;
  homePageLogin.style.paddingTop = 0;
  inputLoginUsername.style.fontSize = 0;
  inputLoginPin.style.fontSize = 0;
  create.style.display = 'none';
  logOut.style.opacity = 100;
  inputLoginUsername.style.borderColor = 'initial';
  inputLoginPin.style.borderColor = 'initial';

  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  loginContainer.style.display = 'none';
};

let changeUserClicked = false;

changeUser.addEventListener('click', function () {
  changeUserDropDown(true);
});

const changeUserDropDown = function (sort) {
  if (sort) {
    loginButton.style.marginTop = 400;
    loginButton.style.opacity = 100;
    homePageLogin.style.opacity = 100;
    homePageLogin.style.paddingTop = 30 + 'px';
    inputLoginUsername.style.fontSize = 1.6 + 'rem';
    inputLoginPin.style.fontSize = 1.6 + 'rem';
    welcomeMessage.style.paddingBottom = 2 + 'rem';
    inputLoginUsername.style.paddingTop = 1 + 'rem';
    inputLoginPin.style.paddingTop = 1 + 'rem';
    loginContainer.style.display = 'block';
  } else {
    loginButton.style.marginTop = '0';
    loginButton.style.opacity = '0';
    homePageLogin.style.opacity = '0';
    homePageLogin.style.paddingTop = '0';
    inputLoginUsername.style.fontSize = 'initial';
    inputLoginPin.style.fontSize = 'initial';
    welcomeMessage.style.paddingBottom = '0';
    inputLoginUsername.style.paddingTop = '0';
    inputLoginPin.style.paddingTop = '0';
  }
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // const now = new Date();
  // const year = now.getFullYear();
  // const day = `${now.getDate()}`.padStart(2, 0);
  // const month = `${now.getMonth() + 1}`.padStart(2, 0);
  // const hour = now.getHours();
  // const minute = now.getMinutes();

  // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

  console.log(accounts);

  // const locale = navigator.language

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    newUserConatiner.style.display = 'none';

    // Create Date
    loginUI();
    updateUI(currentAccount);
  } else {
    inputLoginUsername.style.borderColor = 'red';
    inputLoginPin.style.borderColor = 'red';
    error.style.fontSize = 1.9 + 'rem';

    error.style.opacity = 100;

    error.style.paddingTop = 2 + 'rem';
  }

  setInterval(function () {
    const now = new Date();
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
  }, 1000);

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // weekday: "long",
  };
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  loanMessage.textContent = 'Requesting...';

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);

      console.log(new Date());

      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
      loanMessage.textContent = 'Request Granted';

      setTimeout(function () {
        loanMessage.textContent = '';
      }, 5000);
    }, 2500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    +inputClosePin.value === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
