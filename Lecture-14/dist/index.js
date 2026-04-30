var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios, {} from "axios";
const BASE_URL = `https://thesimpsonsapi.com/api`;
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`${BASE_URL}/characters/1`);
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
});
fetchData();
//# sourceMappingURL=index.js.map