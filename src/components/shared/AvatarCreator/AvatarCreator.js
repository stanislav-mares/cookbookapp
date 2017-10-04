import React from 'react';
import PropTypes from 'prop-types';

export default class AvatarCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPainting: false,
      mousePosition: {
          x: 0,
          y: 0
      }
    }
    this.paint = null;
    this.myCanvas = null;
    this.canvasContext = null;
    this.paintStyle = null;
  }

  componentDidMount() {
      this.canvasContext = this.myCanvas.getContext('2d');
      this.canvasContext.lineWidth = 1;
      this.canvasContext.lineJoin = 'round';
      this.canvasContext.lineCap = 'round';
      this.canvasContext.strokeStyle = 'black';

      this.paintStyle = getComputedStyle(this.paint);
      this.myCanvas.width = parseInt(this.paintStyle.getPropertyValue('width'));
      this.myCanvas.height = parseInt(this.paintStyle.getPropertyValue('height'));
    }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.isPainting)
      return false;

    return true;
  }

  handleMouseMove = (event) => {
    this.setState({
      mousePosition: {
        x: event.pageX - this.myCanvas.offsetLeft,
        y: event.pageY - this.myCanvas.offsetTop,
      }
    });

    if (this.state.isPainting)
      this.onPaint();
  }

  handleMouseDown = () => {
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.state.mousePosition.x, this.state.mousePosition.y);
    this.setState({
      isPainting: true
    });
  }

  handleMouseUp = () => {
    this.setState({
      isPainting: false
    });
    this.props.setAvatarURL(this.myCanvas.toDataURL());
  }

  handleClearCanvas = () => {
    this.canvasContext.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
    this.props.setAvatarURL(this.myCanvas.toDataURL());
  }

  onPaint = () => {
    this.canvasContext.lineTo(this.state.mousePosition.x, this.state.mousePosition.y);
    this.canvasContext.stroke();
  };

  render() {

    const style = {
      width: "150px",
      height: "150px",
      border: "2px dashed lightgrey"
    };

    return(
      <div>
        <div style={style} ref={(ref) => this.paint = ref}>
          <canvas
            ref={(ref) => {this.myCanvas = ref}}
            onMouseMove={this.handleMouseMove}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
          </canvas>
          <button type="button" onClick={this.handleClearCanvas}>Clear</button>
        </div>
      </div>
    );
  }
}

AvatarCreator.propTypes = {
  setAvatarURL : PropTypes.func.isRequired
};
