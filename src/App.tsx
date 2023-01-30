import React, { FC } from 'react';
import InputRange from './components/inputRange/inputRange';
import {
  changeStorageValue,
  changeTransferValue,
} from './components/inputRange/inputRangeSlice';
import CompareItem from './components/compareItem/compareItem';
import { companyList } from './components/companyList';
import { useAppDispatch, useAppSelector } from './store/hooks';

type inputsList = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
type compArr = {
  name: string;
  cost: any;
  icon: string;
  bgColor: string;
};

const App: FC = () => {
  const dispatch = useAppDispatch();
  const storageValue = useAppSelector(
    (state) => state.reducer.inputRange.storage
  );
  const transferValue = useAppSelector(
    (state) => state.reducer.inputRange.transfer
  );
  const ssdHdd = useAppSelector((state) => state.reducer.compareItem.ssdHdd);
  const multiSingle = useAppSelector(
    (state) => state.reducer.compareItem.multiSingle
  );

  const inputsList: inputsList[] = [
    {
      name: 'Storage',
      value: storageValue.toString(),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeStorageValue(e.target.value)),
    },
    {
      name: 'Transfer',
      value: transferValue.toString(),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeTransferValue(e.target.value)),
    },
  ];

  const compArr: compArr[] = [];

  companyList.forEach((company) => {
    switch (company.name) {
      case 'backblaze':
        const calcBackblaze = storageValue * 0.005 + transferValue * 0.01;
        const costBackblaze = calcBackblaze < 7 ? 7 : calcBackblaze;
        return compArr.push({
          name: company.name,
          cost: costBackblaze.toFixed(2),
          icon: company.icon,
          bgColor: company.bgColor,
        });

      case 'bunny':
        const calcBunny =
          storageValue * (ssdHdd === 'option1' ? 0.01 : 0.02) +
          transferValue * 0.01;
        const costBunny = calcBunny > 10 ? 10 : calcBunny;
        return compArr.push({
          name: company.name,
          cost: costBunny.toFixed(2),
          icon: company.icon,
          bgColor: company.bgColor,
        });

      case 'scaleway':
        const calcScaleway =
          (storageValue <= 75 ? 0 : storageValue - 75) *
            (multiSingle === 'option1' ? 0.06 : 0.03) +
          (transferValue <= 75 ? 0 : transferValue - 75) * 0.01;
        return compArr.push({
          name: company.name,
          cost: calcScaleway.toFixed(2),
          icon: company.icon,
          bgColor: company.bgColor,
        });

      case 'vultr':
        const calcVultr = storageValue * 0.01 + transferValue * 0.01;
        const costVultr = calcVultr < 5 ? 5 : calcVultr;
        return compArr.push({
          name: company.name,
          cost: costVultr.toFixed(2),
          icon: company.icon,
          bgColor: company.bgColor,
        });

      default:
        break;
    }
  });
  const costArr = compArr
    .map((comp) => comp.cost)
    .sort((a: any, b: any) => b - a);

  return (
    <div className="app-container">
      <div className="input-wrapper fs-5">
        {inputsList.length > 0 &&
          inputsList.map((input) => (
            <InputRange
              key={input.name}
              value={input.value}
              name={input.name}
              onChange={input.onChange}
            />
          ))}
      </div>
      <hr />
      <div className="compare-items-wrap">
        {compArr.length > 0 &&
          compArr.map((item: compArr) => {
            return (
              <CompareItem
                key={`${item.name}_${Math.ceil(Math.random() * Date.now())}`}
                name={item.name}
                cost={item.cost}
                imgSrc={item.icon}
                bgColor={
                  item.cost === costArr[3]
                    ? item.bgColor
                    : 'bg-secondary bg-opacity-50'
                }
                valuemax={costArr[0]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
