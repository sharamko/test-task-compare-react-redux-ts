import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeMultiSingle, changeSsdHdd } from './compareItemSlice';

type compareItemProps = {
  name: string;
  cost: number;
  imgSrc: string;
  bgColor: string;
  valuemax: number;
};

const CompareItem: FC<compareItemProps> = ({
  name,
  cost,
  imgSrc,
  bgColor,
  valuemax,
}) => {
  const dispatch = useAppDispatch();
  const widthProgress = `${(cost / valuemax) * 90}%`;
  const ssdHdd = useAppSelector((state) => state.reducer.compareItem.ssdHdd);
  const multiSingle = useAppSelector(
    (state) => state.reducer.compareItem.multiSingle
  );

  return (
    <div className="compare-item">
      <div className="item-name">
        {name}
        {(name === 'bunny' || name === 'scaleway') && (
          <div className="d-flex radio-input">
            <div className="form-check mx-0 form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id="inlineRadio1"
                value="option1"
                checked={
                  (name === 'bunny' ? ssdHdd : multiSingle) === 'option1'
                    ? true
                    : false
                }
                onChange={(e) =>
                  dispatch(
                    (name === 'bunny' ? changeSsdHdd : changeMultiSingle)(
                      e.target.value
                    )
                  )
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                {name === 'bunny' ? 'HDD' : 'Multi'}
              </label>
            </div>
            <div className="form-check mx-1 form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id="inlineRadio2"
                value="option2"
                checked={
                  (name === 'bunny' ? ssdHdd : multiSingle) === 'option2'
                    ? true
                    : false
                }
                onChange={(e) =>
                  dispatch(
                    (name === 'bunny' ? changeSsdHdd : changeMultiSingle)(
                      e.target.value
                    )
                  )
                }
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                {name === 'bunny' ? 'SSD' : 'Single'}
              </label>
            </div>
          </div>
        )}
      </div>
      <img className="item-img" src={imgSrc} alt="companyLogo" />
      <div
        className="progress item-progress"
        role="progressbar"
        aria-label="Example with label"
      >
        <div
          className={`progress-bar ${bgColor}`}
          style={{ width: widthProgress }}
        >
          {cost}$
        </div>
      </div>
    </div>
  );
};

export default CompareItem;
