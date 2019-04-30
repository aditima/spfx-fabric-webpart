import * as React from 'react';
import styles from './TestWebPart.module.scss';
import { ITestWebPartProps } from './ITestWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default class TestWebPart extends React.Component<ITestWebPartProps, {}> {
  public render(): React.ReactElement<ITestWebPartProps> {
    return (
      <div>
        <DefaultButton text='Test Button' />
      </div>
    );
  }
}
