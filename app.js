"use strict";
window.addEventListener("load", start);

function start() {
  const customers = getQueueData();

  setInterval(() => addQueueData(customers), 1000);
}

function addQueueData(customers) {
  const queueSize = getNumberOfCustomers();
  customers.push(queueSize);
  customers.shift();
  setBarHeight(customers);
}

function getQueueData() {
  const customers = [];
  for (let i = 0; i < 40; i++) {
    customers[i] = getNumberOfCustomers();
  }
  return customers;
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function setBarHeight(customers) {
  for (let i = 0; i < customers.length; i++) {
    document.querySelectorAll("#barChart div")[i].style.height = `${
      customers[i] * 6
    }px`;
  }
}
