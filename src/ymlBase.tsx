import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';

interface ComponentData {
  type: React.ComponentType<any>;
  props: { [key: string]: any };
  component: { [key: string]: any };
}

interface YAMLData {
  components: ComponentData[];
}

function YamlComponent() {
  const [data, setData] = useState<YAMLData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./ymls/file.yaml');

        console.log('レスポンス')
        console.log(response)

        const text = await response.text();

        console.log('テキスト')
        console.log(text)

        const parsedData = yaml.load(text) as YAMLData;

        console.log('パースデータ')
        console.log(parsedData)

        setData(parsedData);
      } catch (error) {
        console.error('Error fetching YAML file:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log('テスト')
  console.log(data.components)
  // Assuming your YAML file structure represents React components
  const renderComponents = () => {
    return data.components.map((component, index) => {
      // const Component = component.type;
      const props = component.props;

  console.log('テスト2')
  console.log(props)
      // return <Component key={index} {...props} />;
      return (
        <div>
          {props.prop1}
          <p key={index}>{props.prop2}</p>
          
        </div>
      )
    });
  };

  return (
    <div>
      <h1>Rendered Components</h1>
      {renderComponents()}
    </div>
  );
}

export default YamlComponent;
