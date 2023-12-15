import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handledPressedKey);
  }

  handledPressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentWillUnmoun(): void {
    document.removeEventListener('keyup', this.handledPressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey ? (
          <p className="App__message">
            Nothing was pressed yet
          </p>
        ) : (
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        )}
      </div>
    );
  }
}