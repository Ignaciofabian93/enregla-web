import { Spinner } from "@nextui-org/spinner";
import CustomTable from "../ui/table";
import CustomPagination from "../ui/pagination";
import useUsers from "../hooks/useUsers";
import Header from "../ui/header";

export default function UsersModule() {
  const {
    usersColumns,
    userRows,
    handleUsersPage,
    handleUsersRows,
    totalUsersPages,
    totalUsers,
    usersPage,
    usersRows,
    loadingUsers,
    handleSearchUser,
    searchedUser,
    filteredUsers,
  } = useUsers();
  return (
    <>
      <Header
        title="Usuarios"
        fromDate={new Date().toISOString().slice(0, 10)}
        toDate={new Date().toISOString().slice(0, 10)}
        searchedText={searchedUser}
        searchText={handleSearchUser}
      />
      <div className="w-full h-[70%]">
        {loadingUsers ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" color="default" />
          </div>
        ) : (
          <CustomTable columns={usersColumns} rows={userRows} />
        )}
      </div>
      <div className="w-full h-[5%]">
        <CustomPagination
          page={usersPage}
          rows={usersRows}
          totalData={totalUsers}
          totalpages={totalUsersPages}
          handlePage={handleUsersPage}
          handleRows={handleUsersRows}
        />
      </div>
    </>
  );
}
