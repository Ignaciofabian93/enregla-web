import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetVehicleBrands, GetVehicleModels, GetVehicles, SaveVehicle, UpdateVehicle } from "../api/vehicles";
import { Brand, Model, Vehicle, VehicleRows } from "../types/vehicle";
import useSession from "./useSession";

const defaultVehicle: VehicleRows = {
  id: 0,
  brand: "",
  logo: "",
  model: "",
};

const vehicleColumns = [
  { label: "Marca", key: "brand" },
  { label: "Modelo", key: "model" },
  { label: "Opciones", key: "options" },
];

export default function useVehicle() {
  const { token } = useSession();
  const [vehicleBrands, setVehicleBrands] = useState<Brand[]>([]);
  const [totalBrands, setTotalBrands] = useState<number>(0);
  const [vehicleModels, setVehicleModels] = useState<Model[]>([]);
  const [totalModels, setTotalModels] = useState<number>(0);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [vehicle, setVehicle] = useState<VehicleRows>(defaultVehicle);
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    fetchVehicleBrands();
  }, []);

  useEffect(() => {
    if (vehicle.brand) {
      fetchVehicleModels();
    }
  }, [vehicle.brand]);

  const fetchVehicles = async () => {
    setLoading(true);
    const response = await GetVehicles({ token, query: `?page=${page}&rows=${rows}` });
    if (response.error) notifyError(response.error), setLoading(false);
    else {
      setLoading(false);
      setVehicles(response.vehicles);
      setTotalPages(response.totalPages);
    }
  };

  const fetchVehicleBrands = async () => {
    setLoading(true);
    const response = await GetVehicleBrands({ token });
    if (response.error) notifyError(response.error), setLoading(false);
    else {
      setLoading(false);
      setVehicleBrands(response.brands);
      setTotalBrands(response.count);
    }
  };

  const fetchVehicleModels = async () => {
    if (vehicle.brand) {
      setLoading(true);
      const findId = vehicleBrands.find((brand) => brand.brand === vehicle.brand)?.id;
      const response = await GetVehicleModels({ token, brand_id: findId as number });
      console.log(response);

      if (response.error) notifyError(response.error), setLoading(false);
      else {
        setLoading(false);
        setVehicleModels(response.models);
        setTotalModels(response.count);
      }
    }
  };

  const vehicleRows = vehicles
    .map((vehicle) =>
      vehicle.model.map((model) => ({ id: model.id, brand: vehicle.brand, model: model.model, logo: vehicle.logo }))
    )
    .flat(1);

  console.log(vehicleRows);

  const filteredVehicles = vehicleRows.filter((vehicle) => {
    return (
      vehicle.brand.toLowerCase().includes(searched.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searched.toLowerCase())
    );
  });

  const handleVehicle = (field: string, value: string) => {
    setVehicle({ ...vehicle, [field]: value });
  };
  const handleSearch = (text: string) => setSearched(text);

  const selectVehicle = (vehicle_id: number) => {
    const find = vehicles.find((vehicle) => vehicle.id === vehicle_id);
    console.log(find);
  };
  const confirmDelete = () => {};
  const deleteVehicle = () => {};
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const closeConfirmModal = () => setConfirmModal(false);

  const handlePage = (page: number) => setPage(page);
  const handleRows = (rows: number) => setRows(rows);

  const saveVehicle = async () => {
    setLoading(true);
    const response = edit ? await UpdateVehicle({ token, vehicle }) : await SaveVehicle({ token, vehicle });
    console.log("RES", response);

    if (response.error) notifyError(response.error), setLoading(false);
    else {
      setLoading(false);
      notifyMessage(response.message);
      fetchVehicles();
      fetchVehicleBrands();
      setVehicle(defaultVehicle);
      closeModal();
    }
  };

  return {
    vehicleBrands,
    vehicleModels,
    totalBrands,
    totalModels,
    vehicle,
    page,
    rows,
    totalPages,
    showModal,
    confirmModal,
    edit,
    loading,
    searched,
    handleSearch,
    vehicleColumns,
    selectVehicle,
    deleteVehicle,
    openModal,
    closeModal,
    handlePage,
    handleRows,
    vehicleRows,
    handleVehicle,
    filteredVehicles,
    closeConfirmModal,
    confirmDelete,
    saveVehicle,
  };
}