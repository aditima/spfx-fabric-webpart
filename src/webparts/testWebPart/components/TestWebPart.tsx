import * as React from 'react';
import styles from './TestWebPart.module.scss';
import { ITestWebPartProps } from './ITestWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ItemCard } from './ItemCard';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import { FluentCustomizations } from '@uifabric/fluent-theme'; 

export default class TestWebPart extends React.Component<ITestWebPartProps, {}> {
  public render(): React.ReactElement<ITestWebPartProps> {
    const cardsData = this._getData();  
    const cards = cardsData.map((data, index) => {
      return <ItemCard
                key={ 'card_' + index }
                name={data.name}
                title={data.title}
                bioText={data.bioText}
                imageUrl={data.imageUrl}
                backgroundUrl={data.backgroundUrl}
              />
    });
  
    return (
      <Customizer {...FluentCustomizations}>
        <Stack horizontal wrap gap={16}>
          { cards }
        </Stack>
      </Customizer>
    );
  }

  private _getData() {
    const bioText = 'This is a bio or a description of the person and why they are being featured on the page. Perhaps they are a speaker or just super rad. This card is unique for people web parts and can be reused everywhere a person shows up.';
    const getImageUrl = (name: string) => {
      return '../src/webparts/testWebPart/images/' + name.replace(' ', '_') + '.png';
    };
    const getBackgroundUrl = (name: string) => {
      return '../src/webparts/testWebPart/images/' + name.replace(' ', '_') + '_bg.jpeg';
    };
    
    const cardsData = [
      { name: 'Carole Poland', title: 'Principal Engineer', bioText: bioText, imageUrl: getImageUrl('Carole Poland'), backgroundUrl: getBackgroundUrl('Carole Poland') },
      { name: 'Eliva Atkins', title: 'Industrial Designer', bioText: bioText, imageUrl: getImageUrl('Eliva Atkins'), backgroundUrl: getBackgroundUrl('Eliva Atkins') },
      { name: 'Alan Munger', title: 'VP of Contoso Marketing', bioText: bioText, imageUrl: getImageUrl('Alan Munger'), backgroundUrl: getBackgroundUrl('Alan Munger') },
      { name: 'Kat Larsson', title: 'Senior Marketing Manager', bioText: bioText, imageUrl: getImageUrl('Kat Larsson'), backgroundUrl: getBackgroundUrl('Kat Larsson') },
      { name: 'Colin Ballinger', title: 'Engineering Systems Manager', bioText: bioText, imageUrl: getImageUrl('Colin Ballinger'), backgroundUrl: getBackgroundUrl('Colin Ballinger') },
      { name: 'Katri Ahokas', title: 'Program Manager', bioText: bioText, imageUrl: getImageUrl('Katri Ahokas'), backgroundUrl: getBackgroundUrl('Katri Ahokas') }
    ];

    return cardsData;
  }
}