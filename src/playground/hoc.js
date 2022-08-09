const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info Please don't share</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? <WrappedComponent {...props}/> :  <p>You are not authenticated! please log in to see info!</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthInfo isAuthenticated={true} info="there are the details" />
);

