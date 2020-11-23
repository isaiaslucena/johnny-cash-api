# johnny-cash-api

![Deploy Staging](https://github.com/isaiasneto/johnny-cash-api/workflows/Deploy%20Staging/badge.svg?branch=develop)
![Deploy Production](https://github.com/isaiasneto/johnny-cash-api/workflows/Deploy%20Production/badge.svg?branch=master)


![Johnny Cash](JohnnyCash.png)

Johnny Ca$h API


### Live applications:
The first GET might be slow, because after some inactivity, Heroku set the node to standby state.

[Staging environment](https://johnny-cash-staging-api.herokuapp.com/)

[Production environment](https://johnny-cash-api.herokuapp.com/)


### Usage:

[Endpoint](https://johnny-cash-api.herokuapp.com/orderLog/topSelling?startDate=2019-09-01&endDate=2019-09-10) to get top selling products of selected date range:

```
https://johnny-cash-api.herokuapp.com/orderLog/topSelling?startDate=2019-09-01&endDate=2019-09-10
```

[Endpoint](https://johnny-cash-api.herokuapp.com/orderLog) to get all orders:

```
https://johnny-cash-api.herokuapp.com/orderLog
```

[Endpoint](https://johnny-cash-api.herokuapp.com/orderLog?startDate=2019-09-01&endDate=2019-09-10) to get all orders os selected date range:

```
https://johnny-cash-api.herokuapp.com/orderLog?startDate=2019-09-01&endDate=2019-09-10
```

[Endpoint](https://johnny-cash-api.herokuapp.com/employee) to get all employees:

```
https://johnny-cash-api.herokuapp.com/employee
```
