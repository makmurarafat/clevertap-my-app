import clevertap from 'clevertap-web-sdk';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h3>CleverTap Web SDK using React</h3>
      <div>
        <button onClick={()=>{ handleEventPushProductViewed(); handleEventPushEmail() }}>Push Event</button>
      </div>
    </div>
  );
}

function handleEventPushProductViewed () {
  clevertap.event.push('Product Viewed', {
    "Product name": "CleverTap",
    "Product ID": "1",
    "Product Image": "https://d35fo82fjcw0y8.cloudfront.net/2018/07/26020307/customer-success-clevertap.jpg",
  });
}

function handleEventPushEmail () {
clevertap.onUserLogin.push({
  "Site": {
    "Email": "clevertap+makmurketiga@gmail.com",
  }
 })
}
export default App;
