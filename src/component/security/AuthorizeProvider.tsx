import React, { useEffect } from 'react';
import { loadCurrentUserInfo } from './authorizeProviderSlice';
import { useAppDispatch } from 'app/store';

const Authenticate: React.FC<React.PropsWithChildren> = (props: React.PropsWithChildren) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCurrentUserInfo());    
  }, []);

  return (
      <>
        {props.children}
      </>
  );
}

export default Authenticate;
