// import { CssBaseline } from "@mui/material";
import { FC, lazy, Suspense, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./app.less";
import "./app.css";
import Loader from "./components/util/loader/Loader";

import { AuthFormSubmitContext, UserContext } from "./helpers/Context";
import { Provider } from "react-redux";
import store from "./store";
import { useAppDispatch } from "./hooks/useAddDispatch";
import { getCurrentUser } from "./actions/auth.action";

const Account = lazy(() => import("./pages/account/Account"));
const UserUpdateProperty = lazy(() => import("./pages/updateProperty/UpdateProperty"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const PendingListings = lazy(() => import("./pages/pendingListings/PendingListings"));
const UpdatePendingListing = lazy(
	() => import("./pages/updatePendingListings/UpdatePendingListing"),
);

const Listing = lazy(() => import("./pages/listing/Listing"));

const UserNav = lazy(() => import("./components/layout/userNav"));

// const Footer = lazy(() => import("./components/layout/footer/Footer"));

const Properties = lazy(() => import("./pages/properties/Properties"));
const AllImages = lazy(() => import("./pages/allimages/Images"));
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));

const Property = lazy(() => import("./pages/property/Property"));

const App: FC = () => {
	const [propertyOtpModelOpened, setPropertyOtpModelOpened] = useState(false);

	return (
		<Provider store={store}>
			<HelmetProvider>
				<Suspense fallback={<Loader fullScreen />}>
					{/* <CssBaseline /> */}
					<Router>
						<UserNav />

						<Routes>
							<Route
								path="/"
								element={
									<main>
										<Helmet>
											<title>Shri Property | live in your dreams</title>
											<link rel="canonical" href="https://shriproperty.com" />
											<meta
												name="description"
												content="Shri Property is committed to delivering a
										 high level of
								expertise, customer service, and attention to detail to
								sales of real estate, and rental
								properties."
											/>
										</Helmet>
										<Home />
									</main>
								}
							/>
							<Route path="/contact" element={<Contact />} />
							<Route path="/properties" element={<Properties />} />
							<Route
								path="/properties/:id"
								element={
									<Property
										propertyOtpModelOpened={propertyOtpModelOpened}
										setPropertyOtpModelOpened={setPropertyOtpModelOpened}
									/>
								}
							/>

							<Route path="/listing" element={<Listing />} />
							<Route path="/allimages/:id" element={<AllImages />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/account" element={<Account />} />
							<Route path="/account/pending-listings" element={<PendingListings />} />
							<Route path="/property/update/:id" element={<UserUpdateProperty />} />
							<Route
								path="/account/pending-listings/:id"
								element={<UpdatePendingListing />}
							/>

							<Route path="/404" element={<NotFound />} />
							<Route path="*" element={<Navigate replace to="/404" />} />
						</Routes>
					</Router>
				</Suspense>
			</HelmetProvider>
		</Provider>
	);
};

// // created a different router to hide navbar in admin routes
// const UserRoutes: FC = () => {
// 	const dispatch = useAppDispatch();

// 	const [user, setUser] = useState<LoggedInUser | LoggedOutUser>({
// 		loaded: false,
// 		isLoggedIn: false,
// 		data: {},
// 	});
// 	const [authFormSubmit, setAuthFormSubmit] = useState(false);
// 	const [propertyOtpModelOpened, setPropertyOtpModelOpened] = useState(false);
// 	const [userUpdated, setUserUpdated] = useState(false);

// 	useEffect(() => {
// 		const accessToken = localStorage.getItem("access_token");
// 		const refreshToken = localStorage.getItem("refresh_token");

// 		if (!accessToken || !refreshToken) return;

// 		dispatch(getCurrentUser()).catch(() => {
// 			dispatch(getCurrentUser());
// 		});
// 	}, []);

// 	return (
// 		<AuthFormSubmitContext.Provider value={{ authFormSubmit, setAuthFormSubmit }}>
// 			<UserContext.Provider
// 				value={{
// 					update: userUpdated,
// 					setUpdate: setUserUpdated,
// 					loaded: user.loaded,
// 					isLoggedIn: user.isLoggedIn,
// 					data: user.data,
// 				}}
// 			>
// 				<UserNav />
// 				<Routes>
// 					<Route
// 						path="/"
// 						element={
// 							<main>
// 								<Helmet>
// 									<title>Shri Property | live in your dreams</title>
// 									<link rel="canonical" href="https://shriproperty.com" />
// 									<meta
// 										name="description"
// 										content="Shri Property is committed to delivering a
// 										 high level of
// 								expertise, customer service, and attention to detail to
// 								sales of real estate, and rental
// 								properties."
// 									/>
// 								</Helmet>
// 								<Home />
// 							</main>
// 						}
// 					/>
// 					<Route path="/contact" element={<Contact />} />
// 					<Route path="/properties" element={<Properties />} />
// 					<Route
// 						path="/properties/:id"
// 						element={
// 							<Property
// 								propertyOtpModelOpened={propertyOtpModelOpened}
// 								setPropertyOtpModelOpened={setPropertyOtpModelOpened}
// 							/>
// 						}
// 					/>

// 					<Route path="/listing" element={<Listing />} />
// 					<Route path="/allimages/:id" element={<AllImages />} />
// 					<Route path="/signup" element={<Signup />} />
// 					<Route path="/login" element={<Login />} />
// 					<Route path="/account" element={<Account />} />
// 					<Route path="/account/pending-listings" element={<PendingListings />} />
// 					<Route path="/property/update/:id" element={<UserUpdateProperty />} />
// 					<Route
// 						path="/account/pending-listings/:id"
// 						element={<UpdatePendingListing />}
// 					/>

// 					<Route path="/404" element={<NotFound />} />
// 					<Route path="*" element={<Navigate replace to="/404" />} />
// 				</Routes>
// 				{/* <Footer /> */}
// 			</UserContext.Provider>
// 		</AuthFormSubmitContext.Provider>
// 	);
// };

export default App;
