import React, {useState} from 'react';
import * as Styled from './TextInput.styled';
import {IInput} from './Types';

export const TextInput: React.FC<IInput> = ({
  placeholder = 'Placeholder',
  onChangeText,
  keyboardType,
  secureTextEntry,
  marginTop,
  marginBottom,
  value,
  editable,
  width,
  heigth,
  rounded,
  fontSize,
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <Styled.Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      width={width}
      BgColor={rounded ? '#fff' : 'transparent'}
      heigth={rounded ? 43 : heigth}
      padL={rounded ? 22 : 0}
      radius={rounded ? 20 : 0}>
      <Styled.Input
        value={value}
        fontSize={fontSize}
        placeholderTextColor={rounded ? '#999' : '#4f4e57'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry ? secure : false}
        keyboardType={keyboardType}
        editable={editable}
      />
      {secureTextEntry && (
        <Styled.TouchArea onPress={() => setSecure(!secure)}>
          <Styled.Icon name={secure ? 'ios-eye' : 'ios-eye-off'} />
        </Styled.TouchArea>
      )}
    </Styled.Container>
  );
};
