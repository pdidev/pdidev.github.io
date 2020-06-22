var Plugins =
[
    [ "The Decl'HDF5 plugin", "Decl_HDF5_plugin.html", [
      [ "Configuration grammar", "Decl_HDF5_plugin.html#autotoc_md16", [
        [ "`FILE_DESC`", "Decl_HDF5_plugin.html#autotoc_md17", null ],
        [ "`DATA_SECTION`", "Decl_HDF5_plugin.html#autotoc_md18", null ],
        [ "`DATA_IO_DESC`", "Decl_HDF5_plugin.html#autotoc_md19", null ],
        [ "`SELECTION_DESC`", "Decl_HDF5_plugin.html#autotoc_md20", null ]
      ] ],
      [ "full configuration example", "Decl_HDF5_plugin.html#autotoc_md21", null ]
    ] ],
    [ "The FlowVR plugin", "FlowVR_plugin.html", [
      [ "Configuration elements", "FlowVR_plugin.html#configuration", [
        [ "FlowVR plugin tree", "FlowVR_plugin.html#flowvr_tree", [
          [ "component", "FlowVR_plugin.html#component_node", null ],
          [ "wait_on_data", "FlowVR_plugin.html#wait_on_data_node", null ],
          [ "wait_on", "FlowVR_plugin.html#wait_on_node", null ],
          [ "status", "FlowVR_plugin.html#status_node", null ],
          [ "abort_on", "FlowVR_plugin.html#abort_on_node", null ],
          [ "init_on", "FlowVR_plugin.html#init_on_node", null ],
          [ "parallel", "FlowVR_plugin.html#parallel_node", null ],
          [ "Several modules", "FlowVR_plugin.html#several_modules", null ]
        ] ],
        [ "Ports", "FlowVR_plugin.html#ports", [
          [ "input_ports", "FlowVR_plugin.html#input_ports", null ],
          [ "output_ports", "FlowVR_plugin.html#output_ports", null ]
        ] ],
        [ "Message", "FlowVR_plugin.html#message", [
          [ "Data payload", "FlowVR_plugin.html#data_payload", null ]
        ] ],
        [ "Chunk payload", "FlowVR_plugin.html#chunks_payload", null ],
        [ "Event button payload", "FlowVR_plugin.html#button_payload", null ],
        [ "Event mouse payload", "FlowVR_plugin.html#mouse_payload", null ],
        [ "Stamp", "FlowVR_plugin.html#stamp", null ]
      ] ],
      [ "Reading and writing data examples", "FlowVR_plugin.html#c_api", [
        [ "Read data from FlowVR message by access the shared memory", "FlowVR_plugin.html#read_shared", null ],
        [ "Write data from FlowVR message by access the shared memory", "FlowVR_plugin.html#write_shared", null ],
        [ "Read data from FlowVR message by copy from the shared memory", "FlowVR_plugin.html#read_copy", null ],
        [ "Write data to FlowVR message by copy to the shared memory", "FlowVR_plugin.html#write_copy", null ],
        [ "Write data to FlowVR message by copy the subset of data to the shared memory", "FlowVR_plugin.html#wrtie_sparse", null ]
      ] ],
      [ "and writing stamps examples", "FlowVR_plugin.html#Reading", [
        [ "Read stamp from FlowVR message", "FlowVR_plugin.html#read_stamp", null ],
        [ "Write stamp from FlowVR message", "FlowVR_plugin.html#write_stamp", null ]
      ] ],
      [ "Reading and writing mouse and button event examples", "FlowVR_plugin.html#mouse_button_event", [
        [ "Write mouse event from FlowVR message", "FlowVR_plugin.html#write_mouse", null ],
        [ "Read mouse event from FlowVR message", "FlowVR_plugin.html#read_mouse", null ],
        [ "Write button event from FlowVR message", "FlowVR_plugin.html#write_button", null ],
        [ "Read button event from FlowVR message", "FlowVR_plugin.html#read_button", null ]
      ] ],
      [ "FlowVR examples reworked for %PDI", "FlowVR_plugin.html#flowvr_examples", [
        [ "Running the application", "FlowVR_plugin.html#run_app", null ],
        [ "Tictac example", "FlowVR_plugin.html#tictac", [
          [ "Bundle example", "FlowVR_plugin.html#bundle", null ]
        ] ],
        [ "Primes example", "FlowVR_plugin.html#primes", null ],
        [ "Fluid example", "FlowVR_plugin.html#fluid", null ]
      ] ]
    ] ],
    [ "Trace plugin", "trace_plugin.html", null ],
    [ "The user-code plugin", "user_code_plugin.html", [
      [ "Important notes", "user_code_plugin.html#important_notes_node", null ],
      [ "Dependencies between the code and the specification tree", "user_code_plugin.html#dependencies_node", null ],
      [ "Use examples", "user_code_plugin.html#use_examples_node", [
        [ "Hello world!", "user_code_plugin.html#hello_world_node", null ],
        [ "Handling input", "user_code_plugin.html#handling_input_node", null ],
        [ "Handling output", "user_code_plugin.html#handling_output_node", null ],
        [ "Multiple input/output data", "user_code_plugin.html#multiple_inout_data_node", null ]
      ] ],
      [ "Configuration grammar", "user_code_plugin.html#conf_grammar_node", [
        [ "on_data", "user_code_plugin.html#on_data_node", null ],
        [ "on_event", "user_code_plugin.html#on_event_node", null ],
        [ "function_list", "user_code_plugin.html#function_list_node", null ],
        [ "function_param_list", "user_code_plugin.html#function_param_list_node", null ]
      ] ],
      [ "Specification tree example", "user_code_plugin.html#full_spec_tree_example_node", null ]
    ] ],
    [ "Set_value plugin", "set_value_plugin.html", [
      [ "Configuration grammar", "set_value_plugin.html#set_value_configuration", [
        [ "on_init", "set_value_plugin.html#on_init_list_node", null ],
        [ "on_event", "set_value_plugin.html#on_event_map_node", null ],
        [ "on_data", "set_value_plugin.html#on_data_map_node", null ],
        [ "value operation", "set_value_plugin.html#value_operation", null ],
        [ "value list", "set_value_plugin.html#value_list", null ],
        [ "scalar value", "set_value_plugin.html#scalar_value", null ],
        [ "array value", "set_value_plugin.html#array_value", null ],
        [ "record value", "set_value_plugin.html#record_value", null ]
      ] ],
      [ "full configuration example", "set_value_plugin.html#full_config", null ],
      [ "Using old values to set new", "set_value_plugin.html#old_to_new", [
        [ "Increment value", "set_value_plugin.html#increment", null ],
        [ "Getting old value", "set_value_plugin.html#increment_in_array", null ],
        [ "Getting new value", "set_value_plugin.html#update_array_after_scalar", null ]
      ] ]
    ] ],
    [ "FTI plugin", "FTI_plugin.html", null ],
    [ "Pycall plugin", "pycall_plugin.html", [
      [ "Configuration", "pycall_plugin.html#pycall_configuration", [
        [ "Features and requirements", "FTI_plugin.html#autotoc_md24", [
          [ "Dependencies", "FTI_plugin.html#autotoc_md25", null ],
          [ "Initialization", "FTI_plugin.html#autotoc_md26", null ],
          [ "Predefined descriptors", "FTI_plugin.html#autotoc_md27", null ]
        ] ],
        [ "Configuration grammar", "FTI_plugin.html#autotoc_md28", [
          [ "`checkpoint`", "FTI_plugin.html#autotoc_md29", null ],
          [ "`communicator`", "FTI_plugin.html#autotoc_md30", null ],
          [ "`config_file`", "FTI_plugin.html#autotoc_md31", null ],
          [ "`dataset`", "FTI_plugin.html#autotoc_md32", null ],
          [ "`init_on`", "FTI_plugin.html#autotoc_md33", null ],
          [ "`recover_on`", "FTI_plugin.html#autotoc_md34", null ],
          [ "`recover_var`", "FTI_plugin.html#autotoc_md35", null ],
          [ "`send_file`", "FTI_plugin.html#autotoc_md36", null ],
          [ "`snapshot_on`", "FTI_plugin.html#autotoc_md37", null ],
          [ "`status`", "FTI_plugin.html#autotoc_md38", null ]
        ] ],
        [ "full configuration example", "FTI_plugin.html#autotoc_md39", null ],
        [ "Plugin tree", "pycall_plugin.html#pycall_plugin_tree", null ],
        [ "on_event", "pycall_plugin.html#pycall_on_event", null ],
        [ "on_data", "pycall_plugin.html#pycall_on_data", null ]
      ] ],
      [ "Examples", "pycall_plugin.html#pycall_ex", null ]
    ] ],
    [ "How to create a plugin", "how_to_create_plugin.html", [
      [ "Plugin class", "how_to_create_plugin.html#plugin_class", [
        [ "Example plugin", "how_to_create_plugin.html#example_plugin", null ],
        [ "Adding a callback", "how_to_create_plugin.html#adding_callback", null ],
        [ "Reading and writing data", "how_to_create_plugin.html#rw_data", null ],
        [ "Handling events", "how_to_create_plugin.html#example_events", null ],
        [ "Reading scalar and array from specification tree", "how_to_create_plugin.html#reading_pc_tree", null ],
        [ "Reading maps from specification tree", "how_to_create_plugin.html#reading_pc_tree_2", null ]
      ] ],
      [ "Creating a true plugin: POSIX plugin", "how_to_create_plugin.html#create_true_plugin", [
        [ "Step 1: Think what your plugin will be for.", "how_to_create_plugin.html#step_1", null ],
        [ "Step 2: Prepare your specification tree schema.", "how_to_create_plugin.html#step_2", null ],
        [ "Step 3: Write your plugin.", "how_to_create_plugin.html#step_3", null ],
        [ "Next steps", "how_to_create_plugin.html#plugin_compile", null ]
      ] ]
    ] ]
];