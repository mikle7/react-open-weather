import React from 'react';
import PropTypes from 'prop-types';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';
import { StyledContainer } from './ReactWeather.styles';
import defaultTheme from '../defaultTheme';

const ReactWeather = ({
  unitsLabels,
  showForecast,
  lang,
  data,
  locationLabel,
  isLoading,
  errorMessage,
  theme,
  containerStyle,
  containerMain,
  containerLeft,
  containerRight,
  containerHeader,
}) => {
  if (data) {
    const { forecast, current } = data;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    return (
      <div className={`${containerStyle}`} theme={theme}>
        <div className={`${containerMain}`}>
          <div className={` ${containerLeft}`}>
            <h2 className={` ${containerHeader}`}>{locationLabel}</h2>
            {/* <Today
              current={current}
              unitsLabels={unitsLabels}
              lang={lang}
              theme={theme}
            /> */}
          </div>
          <div className={`${containerRight}`}>
            <WeatherIcon
              path={current.icon}
              size={120}
              color={theme.todayIconColor}
              title={current.description}
            />
          </div>
        </div>
        {showForecast && (
          <Forecast
            unitsLabels={unitsLabels}
            forecast={forecast}
            lang={lang}
            theme={theme}
          />
        )}
      </div>
    );
  }
  return null;
};

ReactWeather.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  unitsLabels: PropTypes.object,
  showForecast: PropTypes.bool,
  lang: PropTypes.string,
  locationLabel: PropTypes.string,
  theme: PropTypes.object,
};

ReactWeather.defaultProps = {
  data: null,
  locationLabel: '',
  errorMessage: null,
  isLoading: false,
  unitsLabels: {
    temperature: 'C',
    windSpeed: 'Km/h',
  },
  showForecast: true,
  lang: 'en',
  theme: defaultTheme,
};

export default ReactWeather;
