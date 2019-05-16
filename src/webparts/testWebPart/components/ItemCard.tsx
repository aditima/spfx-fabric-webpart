import * as React from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Card } from '@uifabric/react-cards';
import { FontWeights } from 'office-ui-fabric-react/lib/Styling';

export interface IItemCardProps {
    name: string;
    title: string;
    bioText: string;
    imageUrl: string;
    backgroundUrl: string;
 }

export class ItemCard extends React.Component<IItemCardProps, {}> {
  public render(): React.ReactElement<IItemCardProps> {
    let { name, title, bioText, imageUrl, backgroundUrl } = this.props;

    const titleText = {
        root: {
            fontWeight: FontWeights.bold
        }
    };    
    const imageStackStyles = {
        root: {
          height: '120px',
          margin: '0px -12px',
          backgroundImage: 'url("' + backgroundUrl + '")',
          backgroundSize: 'cover'
        }
      };
      const personaStyles = {
        root: {
            margin: '24px 0px',
            width: '72px'
        }
      };
      const footerStackStyles = {
        root: {
          borderTop: '1px solid #EEEEEE',
          margin: '0px -12px -12px -12px',
        }
      };
        
    return (
        <Card tokens={{ width: '30%' }}>
            <Stack tokens={{ childrenGap: 0 }}>
              <Text styles={ titleText }>{ name }</Text>
              <Text variant="small">{ title }</Text>
            </Stack>
            <Stack styles={imageStackStyles}>
                <Stack.Item align="center" styles={personaStyles}>
                    <Persona imageUrl={imageUrl} size={ PersonaSize.size72 }/>
                </Stack.Item>
            </Stack>
            <Text>{ bioText }</Text>
          
            <Stack horizontal styles={footerStackStyles}>
              <IconButton iconProps={{ iconName: "Mail" }}/>
              <IconButton iconProps={{ iconName: "SkypeForBusinessLogo" }}/>
              <IconButton iconProps={{ iconName: "FavoriteStar" }}/>
            </Stack>
        </Card>
    );
  }
}
