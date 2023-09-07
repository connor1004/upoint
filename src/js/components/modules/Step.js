import React, { Component } from 'react';

class Step extends Component {
  render() {
    const { className, steps, index } = this.props;
    const count = steps.length;
    const renderItems = steps.map(
      (item, idx) => (
        <li key={`${idx}`} className={idx < index ? 'step-progress-item--done' : (index === idx ? 'step-progress-item--doing' : 'step-progress-item--todo')}>
          <em>
            <span className="step-progress-item-index">{idx + 1}</span>
            <span className="step-progress-item-count">{count}</span>
          </em>
          <span>
            {item}
          </span>
        </li>
      ),
    );

    return (
      <div className={`step ${className}`}>
        <ol className="step-progress">
          {renderItems}
        </ol>
      </div>
    );
  }
}

Step.defaultProps = {
  className: '',
  steps: [],
  index: 0
};

export default Step;
