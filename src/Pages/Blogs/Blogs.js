import React from 'react';

const Blogs = () => {
    return (
        <div className='my-3 p-3'>
            <h3> Difference between authorization and authentication?</h3>
            <p>Authorization কোন কিছুর প্রমান করার যাচাই বাছাই করার প্রক্রিয়া, এবং Authentication হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। কিছু যাচাই করে অনুমতি দেওয়া।</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>I learnt firebase thats why i used this.Besides other option i have many implement authentication such as Okta,Keycloak,Amazon Cognito etc</p>

            <h3>What other services does firebase provide other than authentication?</h3>
            <p>There are many services which Firebase provides, Most useful of them are:
                1.Cloud Firestore.
                2.Cloud Functions.
                3.Authentication.
                4.Hosting.
                5.Cloud Storage.
                6.Google Analytics.
                7.Predictions.
                8. Cloud Messaging.
            </p>

        </div>
    );
};

export default Blogs;