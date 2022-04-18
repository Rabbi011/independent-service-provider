import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='text-primary mt-5'>Q.Difference between authorization and authentication.</h3>
                <p className='fs-5'>Simply expressed, authentication is the process of confirming a person's identity, whereas authorization is the process of confirming a user's access to specific apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board. The first stage is to verify a passenger's identity to ensure that they are who they claim they are. After determining a traveler's identity, the next step is to confirm any unique services to which the passenger has access.</p>
            </div>
            <div>
                <h3 className='text-primary mt-5'>Q.Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fs-5'>To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods.Other authenticate such as Auth0,Basic Auth, JWT etc.</p>
            </div>
            <div>
                <h3 className='text-primary mt-5 '>Q. What other services does firebase provide other than authentication.</h3>
                <p className='fs-5'>Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging etc.</p>
            </div>

        </div>
    );
};

export default Blogs;