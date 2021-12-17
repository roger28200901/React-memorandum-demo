const Item = ({ id, noteData, note, date, time, deleteData, submittingStatus }) => {

    function deleteItem () {
        submittingStatus.current = true;
        deleteData(function (prevData) {
            return prevData.filter(item => item.id !== id)
        })
    }

  return (
    <div className="item">
      <div>
        <p>{noteData.note}</p>
        <p>{`${noteData.date} ${noteData.time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
  );
};

export default Item;
