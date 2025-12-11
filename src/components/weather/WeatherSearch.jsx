import Input from "../ui/Input";
import Button from "../ui/Button";
const WeatherSearch = ({ searchText, setSearchText, loading, getWeather }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getWeather();
      }}
      className="flex items-center gap-3 w-full"
    >
      <label htmlFor="city" className="sr-only">
        Type a city
      </label>
      <Input
        placeholder="Bogota"
        value={searchText}
        onChange={setSearchText}
        loading={loading}
        type="text"
      />
      <Button loading={loading} />
    </form>
  );
};

export default WeatherSearch;
