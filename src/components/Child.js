import React from "react";

const child = Child => {
    class GetExtraData extends React.Component {
        someHelperFunction() {
            // some logic here
        }

        render() {
            const data = {
              // some dummy data
            };
            return <Child {...this.props} callbackFn={this.someHelperFunction} extraData={data} />;
        }
    }

    return GetExtraData;
};

export default child;