import React from "react";

const Main = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="main">
      <p>Current count is: {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase count by 1
      </button>
      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        Increase count by 2
      </button>
      <button
        onClick={() => {
          setCount((c) => c + 2 * 3 * 4);
        }}
      >
        Increase count by 1*2*3*4
      </button>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <ComponentWithRenderMethods count={count} />
        <ComponentWithOtherComponents count={count} />
      </div>
    </div>
  );
};

export default Main;

class ComponentWithRenderMethods extends React.Component {
  renderTitle = () => {
    console.log("Render Method Title");
    return "Component with render methods";
  };
  renderMod1 = () => {
    const { count } = this.props;
    console.log("Render Method 1");

    return <div className={"component"}>{count % 1}</div>;
  };
  renderMod2 = () => {
    const { count } = this.props;
    console.log("Render Method 2");
    return <div className={"component"}>{count % 2}</div>;
  };
  renderMod3 = () => {
    const { count } = this.props;
    console.log("Render Method 3");
    return <div className={"component"}>{count % 3}</div>;
  };
  renderMod4 = () => {
    const { count } = this.props;
    console.log("Render Method 4");
    return <div className={"component"}>{count % 4}</div>;
  };

  render() {
    console.log("ComponentWithRenderMethods");
    return (
      <div className={"component"}>
        {this.renderTitle()}
        {this.renderMod1()}
        {this.renderMod2()}
        {this.renderMod3()}
        {this.renderMod4()}
      </div>
    );
  }
}

class ComponentWithOtherComponents extends React.Component {
  render() {
    console.log("ComponentWithOtherComponents");
    return (
      <div className={"component"}>
        <ExampleTitle />
        <ExampleComponent count={this.props.count % 1} mod={1} />
        <ExampleComponent count={this.props.count % 2} mod={2} />
        <ExampleComponent count={this.props.count % 3} mod={3} />
        <ExampleComponent count={this.props.count % 4} mod={4} />
      </div>
    );
  }
}

class ExampleTitle extends React.PureComponent {
  render() {
    console.log("Render Component Title");
    return "Component with other components";
  }
}

class ExampleComponent extends React.PureComponent {
  render() {
    const { count, mod } = this.props;
    console.log("Render Component ", mod, " ", count);
    return <div className={"component"}>{count}</div>;
  }
}
