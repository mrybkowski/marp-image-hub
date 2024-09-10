import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { Button } from './button';

interface INavigationArrow {
  onClick?: () => void;
  isDisabled?: boolean;
  isArrowBack?: boolean;
  isArrowForward?: boolean;
}

function NavigationArrow({
  onClick,
  isDisabled,
  isArrowBack,
  isArrowForward
}: INavigationArrow) {
  const t = useTranslations();

  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={isDisabled}
      className="cursor-pointer"
      aria-label={isArrowBack ? t('aria.slider.back') : t('aria.slider.next')}>
      {isArrowBack && <ArrowLeftIcon />}
      {isArrowForward && <ArrowRightIcon />}
    </Button>
  );
}

export default NavigationArrow;
