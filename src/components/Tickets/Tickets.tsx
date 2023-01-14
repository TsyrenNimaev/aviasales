import React, { FC } from 'react';
import { add, format, minutesToHours } from 'date-fns';

import { TicketTypes } from '../../store/types';

import classes from './Tickets.module.scss';

const Tickets: FC<TicketTypes> = ({ price, segments, carrier }) => {
  const logo = `//pics.avs.io/99/36/${carrier}.png`;
  const segment = segments.map((el) => el);
  const firstWay = segment[0];
  const secondWay = segment[1];
  const departureDate = (way: { date: string | number | Date }) => format(new Date(way.date), 'HH:mm');
  const timeDurationHours = (way: { duration: number }) => minutesToHours(way.duration);
  const timeDurationMinutes = (way: { duration: number }) => way.duration % 60;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arrivaDate: (way: any) => string = (way) => {
    return format(
      add(new Date(way.date), { hours: timeDurationHours(way), minutes: timeDurationMinutes(way) }),
      'HH:mm'
    );
  };

  type waysLength = {
    stops: {
      length: number | number,
    },
  };

  const transfer = (way: waysLength) => {
    if (way.stops.length === 1) return '1 Пересадка';
    if (way.stops.length === 2) return '2 Пересадки';
    if (way.stops.length === 3) return '3 Пересадки';
    return 'Без Пересадок';
  };

  let formatedPrice = price.toString();
  formatedPrice =
    formatedPrice.length === 5
      ? `${formatedPrice.slice(0, 2)} ${formatedPrice.slice(2)}`
      : `${formatedPrice.slice(0, 3)} ${formatedPrice.slice(3)}`;

  return (
    <React.Fragment>
      <div className={classes['tickets-item__price']}>
        <span>{formatedPrice} &#8381;</span>
        <span>
          <img src={logo} alt="avialogo" />
        </span>
      </div>
      <div className={classes['tickets-item__description']}>
        <ul>
          <li>
            <span>
              {firstWay.origin} – {firstWay.destination}
            </span>
            <span>
              {departureDate(firstWay)} – {arrivaDate(firstWay)}
            </span>
          </li>
          <li>
            <span>В пути</span>
            <span>
              {timeDurationHours(firstWay)}ч {timeDurationMinutes(firstWay)}м
            </span>
          </li>
          <li>
            <span>{transfer(firstWay)}</span>
            <span>{firstWay.stops.join(', ')}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              {secondWay.origin} – {secondWay.destination}
            </span>
            <span>
              {departureDate(secondWay)} – {arrivaDate(secondWay)}
            </span>
          </li>
          <li>
            <span>В пути</span>
            <span>
              {timeDurationHours(secondWay)}ч {timeDurationMinutes(secondWay)}м
            </span>
          </li>
          <li>
            <span>{transfer(secondWay)}</span>
            <span>{secondWay.stops.join(', ')}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Tickets;
