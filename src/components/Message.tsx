//無名関数でコンポーネントを定義してText変数に代入する
//Textコンポーネントは親から'content'というデータを受け取る

const Text = (props: {content: string}) => {
    //propsからcontentという値を取り出す
    const {content} = props;
    //propsで渡された値を表示する

    return <p className={'text'}>{content}</p>
}

export default Text;