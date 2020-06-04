export const toStoryObj: any = (names: string[]) =>
  names.reduce(
    (acc, curr) => {
      return {...acc, [curr]: curr};
    },
    {None: ''}
  );
export {icons} from './icons';
