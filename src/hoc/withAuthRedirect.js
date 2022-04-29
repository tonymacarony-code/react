import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate replace to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
