import Item from "./Item";

const List = ({ listData , deleteData, submittingStatus}) => {

  return (
    <div className="list">
      {listData.map((item) => {
        const { note = "", date = "", time = "", id } = item;
        const noteData = {
          id : id,
          note: note,
          date: date,
          time: time,
        };
        return <Item submittingStatus={submittingStatus} key={id} id={id} noteData={noteData} deleteData={deleteData}/>;
      })}
    </div>
  );
};

export default List;
