import React from "react";

const FinalPage = ({ formData }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl rounded-lg ">
        <div className="grid grid-cols-2 gap-6 pt-6">
          {/* Personal Details */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              Personal Details
            </h2>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Name:</span>{" "}
              {formData.name || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Email:</span>{" "}
              {formData.email || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Phone:</span>{" "}
              {formData.phone || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Git Repo:</span>{" "}
              {formData.repo || "N/A"}
            </p>
          </div>

          {/* Skill Level and Preferences */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              Preferences
            </h2>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Skill Level:</span>{" "}
              {formData.button || "N/A"}
            </p>
            <p>
              <span className="font-medium text-gray-600">
                Selected Frameworks:
              </span>{" "}
              {formData.userChecked
                ?.filter((item) => item.isChecked) // Filter checked items
                .map((item) => item.name) // Extract names
                .join(", ") || "None"}
            </p>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
};

export default FinalPage;
