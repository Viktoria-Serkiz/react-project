import React from "react";
import { Star } from "./Star";

class StarRatingClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: 3,
      hovered: 0,
      selectedIcon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="4.5em"
          width="4.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
        </svg>
      ),
      deselectedIcon: (
        <svg
          fill="rgb(196, 195, 195)"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="4.5em"
          width="4.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
        </svg>
      ),
    };

    let outOf = props.outOf ? props.outOf : 5;

    for (let i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });

    if (this.props.onChange) this.props.onChange(newRating);
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }

  render() {
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

    return (
      <div className="rating">
        <button style={{ color: "yellow" }}>
          {stars.map((star) => {
            return (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeRating(star);
                }}
                onMouseEnter={() => {
                  this.hoverRating(star);
                }}
                onMouseLeave={() => {
                  this.hoverRating(0);
                }}
              >
                {rating < star
                  ? hovered < star
                    ? deselectedIcon
                    : selectedIcon
                  : selectedIcon}
              </span>
            );
          })}
        </button>
      </div>
    );
  }
}

export default StarRatingClass;
