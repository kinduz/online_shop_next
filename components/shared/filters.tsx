import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

      <div className='flex flex-col gap-4'>
        <FilterCheckbox value='1111' text='Собираемые пиццы'/>
        <FilterCheckbox value='2222' text='Новинки'/>
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="number" min={100} max={30000} placeholder="30000" />
        </div>

        <RangeSlider min={200} max={800} step={10} value={[200, 800]}/>
      </div>

      <div className="mt-5 border-b border-y-neutral-100 pb-7">
        <p className="font-bold mb-3">Ингредиенты:</p>
        <div className='flex flex-col gap-4'>
        <CheckboxFiltersGroup
          className="mt-5"
          title="Формат"
          limit={6}
          defaultItems={[
            {
              text: 'Сырный соус',
              value: '1',
            },
            {
              text: 'Моццарелла',
              value: '2',
            },
            {
              text: 'Чеснок',
              value: '3',
            },
            {
              text: 'Солённые огурчики',
              value: '4',
            },
            {
              text: 'Красный лук',
              value: '5',
            },
            {
              text: 'Томаты',
              value: '6',
            },
          ]}
          items={[
            {
              text: 'Сырный соус',
              value: '1',
            },
            {
              text: 'Моццарелла',
              value: '2',
            },
            {
              text: 'Чеснок',
              value: '3',
            },
            {
              text: 'Солённые огурчики',
              value: '4',
            },
            {
              text: 'Красный лук',
              value: '5',
            },
            {
              text: 'Томаты',
              value: '6',
            },
            {
              text: 'Сырный соус',
              value: '1',
            },
            {
              text: 'Моццарелла',
              value: '2',
            },
            {
              text: 'Чеснок',
              value: '3',
            },
            {
              text: 'Солённые огурчики',
              value: '4',
            },
            {
              text: 'Красный лук',
              value: '5',
            },
            {
              text: 'Томаты',
              value: '6',
            },
          ]}
        />
        </div>
      </div>
    </div>
  );
};