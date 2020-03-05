import Comment from './Comment';
import Collapsible from 'react-collapsible';

type Props = {
  commentIDs: number[];
  collapsibleName: string;
};

const triggerStyle = {
  border: '1px solid orange',
  color: 'grey',
  padding: '10px',
  fontFamily: 'Arial'
};

const CommentSection: React.FunctionComponent<Props> = props => {
  console.log('CommentSection props: ', props);
  const { commentIDs, collapsibleName } = props;
  return (
    <div>
      <Collapsible
        trigger={`View ${collapsibleName || 'Comments'}`}
        triggerWhenOpen='Close Comments'
        triggerStyle={triggerStyle}
      >
        <ul>
          {commentIDs.map(el => (
            <Comment commentId={el} />
          ))}
        </ul>
      </Collapsible>
      <style jsx>{`
        div {
          padding: 10px 0 10px 0;
        }
      `}</style>
    </div>
  );
};

export default CommentSection;
