

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { knap: false };
  }

  render() {
    if (this.state.knap) {
      return 'Du klikkede.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ knap: true }) },
      'Like'
    );
  }
}



const domContainer = document.querySelector('#knap');
ReactDOM.render(e(LikeButton), domContainer);
